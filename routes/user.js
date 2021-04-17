const express = require('express');
const db_config = require('../config/database.js');
const conn = db_config.init();
const router = express.Router();

// Check user table
router.get('/', function(req, res, next) {
    const sql = 'SELECT * FROM user';
    conn.query(sql, function(err, rows, fields) {
        if(err) {
            console.log('Select fail\n' + err);
            res.send('Fail');
        }
        else {
            res.send(rows)
        }
    });
});

// Create
router.post('/signUp', function(req, res, next) {
    const sql = 'INSERT INTO user VALUES(?, ?, ?)';
    const params = [req.body.id, req.body.password, req.body.email];
    conn.query(sql, params, function(err) {
        if(err) {
            console.log('Insert fail\n' + err);
            res.send('Fail');
        }
        else {
            res.send('Sign Up success');
        }
    });
});

// Read
router.post('/signIn', function(req, res, next) {
    const sql = 'SELECT password FROM user WHERE id = ?';
    const params = [req.body.id]
    conn.query(sql, params, function(err, rows, fields) {
        if(err) {
            console.log('Select fail\n' + err);
            res.send('Fail');
        }
        else {
            if (rows[0] == undefined || req.body.password != rows[0].password){
                res.send('Incorrect ID or password');
            }
            else{
                res.send('Sign In success');
            }
        }
    });
});

// Update
router.post('/modify', function(req, res, next) {
    const sql = 'UPDATE user SET password = ?, email = ? WHERE id = ?';
    const params = [req.body.password, req.body.email, req.body.id];
    conn.query(sql, params, function(err) {
        if(err) {
            console.log('Update fail\n' + err);
            res.send('Fail');
        }
        else {
            res.send('Modification success');
        }
    });
});

// Delete
router.post('/withdrawal', function(req, res, next) {
    const sql = 'DELETE FROM user WHERE id = ?';
    const params = [req.body.id];
    conn.query(sql, params, function(err) {
        if(err) {
            console.log('Delete fail\n' + err);
            res.send('Fail');
        }
        else {
            res.send('Withdrawal success');
        }
    });
});

module.exports = router;