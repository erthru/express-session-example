import { Request, Response } from "express";

export const get = (req: Request, res: Response) => {
    try {
        res.status(200).json({
            session: req.session,
            sessionId: req.sessionID,
        });
    } catch (e: any) {
        res.status(500).json({
            message: e.message,
        });
    }
};

export const add = (req: Request, res: Response) => {
    try {
        req.session.user = req.body.user;

        res.status(201).json({
            session: req.session,
            sessionId: req.sessionID,
        });
    } catch (e: any) {
        res.status(500).json({
            message: e.message,
        });
    }
};
