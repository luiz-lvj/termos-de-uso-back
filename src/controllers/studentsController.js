import * as studentRepository from "../repositories/studentRepository.js";

export async function controller(req, res){
    try{
        const ra = parseInt(req.params.ra);
        if(isNaN(ra) || ra < 0){
            return res.sendStatus(400);
        }
        const student = await studentRepository.studentAgree(ra);
        if(student == null){
            console.log("a")
            return res.sendStatus(404);
        }
        if(student.agree == "no"){
            return res.sendStatus(200);
        }
        if(student.agree == "yes"){
            return res.sendStatus(403);
        }
    } catch (err){
        console.log(err)
        return res.sendStatus(500);
    }
}

export async function getStudents(req, res){
    try{
        const students = await studentRepository.getStudents();
        return res.status(200).send(students);
    } catch (err){
        console.log(err);
        return res.sendStatus(500);
    }
}