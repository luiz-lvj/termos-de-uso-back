import connection from "../database.js";

export async function studentAgree(ra_num){
    try{
        const student = await connection.query(`
        SELECT name, email, ra, agree FROM students WHERE ra=$1;`,[ra_num]);
        if(student && student.rowCount > 0){
            if(student.rows[0].agree === "yes"){
                return {
                    "name": student.rows[0].name,
                    "email": student.rows[0].email,
                    "ra": student.rows[0].ra,
                    "agree": student.rows[0].agree
                }
            }
            await connection.query(`
            UPDATE students set agree='yes' WHERE ra=$1;`,[ra_num]);
            return {
                "name": student.rows[0].name,
                "email": student.rows[0].email,
                "ra": student.rows[0].ra,
                "agree": student.rows[0].agree
            }
        }
        return null;
    } catch (err){
        console.log(err)
        return null;
    }
}

export async function getStudents(){
    try{
        const students = await connection.query(`
        SELECT * from students;`);
        return students;
    }catch (err){
        console.log(err);
        return [];
    }
}