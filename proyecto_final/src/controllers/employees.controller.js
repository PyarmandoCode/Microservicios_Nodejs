import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee');
        res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: 'Algo fue mal' })
    }
}

export const createEmployees = async (req, res) => {
    const { name, salary } = req.body;
    const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES(?,?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary

    });
}

export const deleteEmployees = async (req, res) => {
    const [result] = await pool.query('DELETE FROM employee where id =?', [req.params.id]);

    if (result.affectedRows <= 0) return res.status(404).json({ mesagge: 'Empleado no existe' })

    res.sendStatus(204);
};

export const updateEmployess = async (req, res) => {
    const { id } = req.params
    const { name, salary } = req.body
    const [result] = await pool.query('UPDATE employee set name =IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?', [name, salary, id])

    if (result.affectedRows <= 0) return res.status(404).json({ mesagge: 'Empleado no existe' })

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.send(rows);
}