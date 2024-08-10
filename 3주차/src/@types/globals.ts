import { PLAYER } from "@/constants";

declare global {
  type PlayerType = (typeof PLAYER)[number];
}
