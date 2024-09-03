import User from "../models/user.module.js";

export const signUp = async (req, res) => {
    const {email, password, name} = req.body;
    try {
        const userExists = await User.findOne({email});
        if (userExists) {
            return res.status(400).json({error: 'User already exists'});
        }

        const user = await User.create({name, email, password});
        return res.status(201).json({user, message: 'User created successfully'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }

}

export const login = async (req, res) => {
    res.send('signup call');
}

export const logout = async (req, res) => {
    res.send('signup call');
}