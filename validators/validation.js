const { param, body } = require("express-validator");
const { validator } = require("./validator");

//at least lowcase, uppercase, number
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;

//username required min 6
//email required isEmail
//password required min 8 match passRegex
//cust_name required isString
//cust_phone required min 12
//cust_address required isString

const register = [
    body("username").isLength({ min: 6 }).notEmpty(), 
    body("email").isEmail().notEmpty(), 
    body("password").isLength({ min: 8 }).matches(passRegex).notEmpty(), 
    validator
];

const login = [
    body("email").isEmail().notEmpty(), 
    body("password").isLength({ min: 8 }).notEmpty(), 
    validator
];

const updateprofile = [
    body("user").isLength({ min: 6 }).notEmpty(), 
    body("email").isEmail().notEmpty(), 
    validator
];

const changePw = [
    body("newpw").isLength({ min: 8 }).matches(passRegex).notEmpty(), 
    validator
];

const updateaddress = [
    body("cust_name").isString().notEmpty(), 
    body("cust_phone").isLength({ min: 12 }).notEmpty(), 
    body("cust_address").isString().notEmpty(), 
    validator
];

const addaddress = [
    body("cust_name").isString().notEmpty(), 
    body("cust_phone").isLength({ min: 12 }).notEmpty(), 
    body("cust_address").isString().notEmpty(), 
    validator
];

const addrequest = [
    body("req_unit").isNumeric().notEmpty(), 
    body("req_notes").isString(), 
    body("req_est").isString().notEmpty(),
    body("cust_address").notEmpty(),
    validator
];

const addorder = [
    body("cost").isString().notEmpty(), 
    body("qty").isString().notEmpty(), 
    body("address").isString().notEmpty(), 
    body("type").isString().notEmpty(), 
    body("notes").isString(), 
    validator];

module.exports = {
  register,
  login,
  updateprofile,
  changePw,
  updateaddress,
  addaddress,
  addorder,
  addrequest
};
/*
const getPraktikanByName  = [
    param('nama').isLength({min: 8}),
    validator
]

const getPraktikanByEmailAndTelepon  = [
    param('email').isEmail(),
    param('telepon').isLength(12),
    validator
]

const insertPraktikan =  [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['L','P']),
    body('angkatan').isInt({min: 2018}),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').notEmpty(),
    validator
]

const insertBulkPraktikan  = [
    body('*.nama').isLength({min: 8}),
    body('*.jenis_kelamin').isIn(['L','P']),
    body('*.angkatan').isInt({min: 2018}),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').notEmpty(),
    validator
]

const deletePraktikan = [
    body('email').isEmail(),
    validator
]

const updatePraktikan = [
    body('nama').isLength({min: 8}),
    body('telepon').isLength(12),
    validator
]

module.exports = {
    getPraktikanByName,
    getPraktikanByEmailAndTelepon,
    insertPraktikan,
    insertBulkPraktikan,
    deletePraktikan,
    updatePraktikan
}

const register =  [
    body('username').isLength({min: 8}),
    body('email').isEmail(),
    body('password').isLength({max: 12}),
    validator
]

const login =  [
    body('email').isEmail(),
    body('password').isLength({max: 12}),
    validator
]
const updateprofile =  [
    body('user').isLength({min: 8}),
    body('email').isEmail(),
    validator
]
const changePw =  [
    body('newpw').isLength({max: 12}),
    validator
]
const updateaddress =  [
    body('cust_name').isLength({min: 8}),
    body('cust_phone').isLength({min: 12}),
    validator
]

module.exports = {
    register,
    login,
    updateprofile,
    changePw,

}*/