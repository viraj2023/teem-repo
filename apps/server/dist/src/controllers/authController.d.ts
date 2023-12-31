import { Request, Response } from "express";
export declare const signUpHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const verifyUserHandler: (req: Request, res: Response) => Promise<void>;
export declare const loginHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const logoutHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const forgotPasswordPost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const resetPasswordPost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const resendOtp: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const changePassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const checkAuth: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
