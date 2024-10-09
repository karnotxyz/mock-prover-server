import { Router, Request, Response } from "express";

const router = Router();

router.post("/add_job", (_req: Request, res: Response) => {
  res.json({
    code: "JOB_RECEIVED_SUCCESSFULLY",
  });
});

router.post("/get_status", (_req: Request, res: Response) => {
  res.json({
    status: "ONCHAIN",
    validation_done: true,
  });
});

export default router;
