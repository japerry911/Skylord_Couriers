const { Shipment } = require('../models/shipment');
const { Good } = require('../models/good');
const { User } = require('../models/user');
const { ShipmentGood } = require('../models/shipmentGood');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

async function fireUpMongoose() {
    try {
        await mongoose.connect('mongodb://localhost/skylordCouriers', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true });
        console.log('Successfully connected to MongoDB...');

        console.log('Clearing Seeds...');

        await User.deleteMany({});
        await Good.deleteMany({});
        await Shipment.deleteMany({});
        await ShipmentGood.deleteMany({});

        console.log('Seeds cleared...');
    } catch (error) {
        console.error(`Failed to connect to MongoDB - ${error}`);
    }
}

async function seedUsers() {
    const users = [
        {
            username: "testtest1",
            password: "testtest1",
            isShipper: false,
            isCourier: true,
            city: "Denver",
            state: "CO"
        },
        {
            username: "testtest2",
            password: "testtest2",
            isShipper: true,
            isCourier: false,
            city: "Omaha",
            state: "NE"
        },
        {
            username: "testtest3",
            password: "testtest3",
            isShipper: true,
            isCourier: false,
            city: "Lincoln",
            state: "NE"
        },
        {
            username: "testtest4",
            password: "testtest4",
            isShipper: false,
            isCourier: true,
            city: "Denver",
            state: "CO"
        }
    ]

    const salt = await bcrypt.genSalt(10);
    
    users.forEach(async user => {
        user.password = await bcrypt.hash(user.password, salt);

        const newUser = new User(user);
        await newUser.save();
    });
}

async function seedGoods() {
    const goods = [
        {
            name: "Dog Bones",
            weight: 20.23
        },
        {
            name: 'Cat Bones',
            weight: 10.25
        },
        {
            name: 'Salmon Dog Treats',
            weight: 100.00
        },
        {
            name: 'Giant Blocks of Concrete',
            weight: 524.26
        }
    ];

    goods.forEach(async good => {
        const newGood = new Good(good);
        await newGood.save();
    });
}

async function seedShipments() {
    await mongoose.connect('mongodb://localhost/skylordCouriers', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true });

    const test1C = await User.findOne({ username: 'testtest1' });
    const test2S = await User.findOne({ username: 'testtest2' });
    const test3S = await User.findOne({ username: 'testtest3' });
    const test4C = await User.findOne({ username: 'testtest4' });

    const shipments = [
        {
            shipper: test2S,
            courier: test1C,
            price: 12.34,
            status: 'Not Claimed'
        },
        {
            shipper: test2S,
            courier: test1C,
            price: 12.12,
            status: 'Not Claimed'
        },
        {
            shipper: test2S,
            courier: test1C,
            price: 25.31,
            status: 'Not Claimed'
        },
        {
            shipper: test3S,
            courier: test4C,
            price: 7.42,
            status: 'Not Claimed'
        },
        {
            shipper: test3S,
            courier: test4C,
            price: 12.95,
            status: 'Not Claimed'
        },
        {
            shipper: test3S,
            courier: test4C,
            price: 100.25,
            status: 'Not Claimed'
        }
    ];

    shipments.forEach(async shipment => {
        const newShipment = new Shipment(shipment);
        newShipment.save();
    });
}

async function seedShipmentGoods() {
    const good1 = await Good.findOne({ name: 'Dog Bones' });
    const good2 = await Good.findOne({ name: 'Cat Bones' });
    const good3 = await Good.findOne({ name: 'Salmon Dog Treats' });
    const good4 = await Good.findOne({ name: 'Giant Blocks of Concrete' });

    const shipment1 = await Shipment.findOne({ price: 12.34 });
    const shipment2 = await Shipment.findOne({ price: 12.12 });
    const shipment3 = await Shipment.findOne({ price: 25.31 });
    const shipment4 = await Shipment.findOne({ price: 7.42 });
    const shipment5 = await Shipment.findOne({ price: 12.95 });
    const shipment6 = await Shipment.findOne({ price: 100.25 });

    const shipmentGoods = [
        {
            good: good1,
            shipmentId: shipment1._id 
        },
        {
            good: good2,
            shipmentId: shipment2._id
        },
        {
            good: good3,
            shipmentId: shipment3._id
        },
        {
            good: good4,
            shipmentId: shipment4._id
        },
        {
            good: good3,
            shipmentId: shipment5._id
        },
        {
            good: good2,
            shipmentId: shipment6._id
        }
    ];

    shipmentGoods.forEach(async shipmentGood => {
        const newShipmentGood = new ShipmentGood(shipmentGood);
        await newShipmentGood.save();
    });
}

async function main() {
    await fireUpMongoose();

    await seedUsers();
    console.log('Users seeded...');

    await seedGoods();
    console.log('Goods seeded...');

    await seedShipments();
    console.log('Shipments seeded...');

    await seedShipmentGoods();
    console.log('ShipmentGoods seeded...');

    console.log('------------------------------');
    console.log('FINISHED SEEDING, HAVE FUN!');
    console.log('------------------------------');
}

main();