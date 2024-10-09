import { Router, Request, Response } from "express";
import { updateState } from "../transaction";

const router = Router();

router.post("/update-state", async (req: Request, res: Response) => {
  try {
    const { block_no, block_hash, global_root } = req.body;
    const txn_hash = await updateState(block_no, block_hash, global_root);
    res.json({
      msg: "State updated successfully",
      txn_hash,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
