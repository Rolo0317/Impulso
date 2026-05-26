import { Injectable } from "@nestjs/common";
import type { LeadTemperature } from "@impulso/types";
import { CreateLeadDto } from "./create-lead.dto";

@Injectable()
export class LeadsService {
  create(dto: CreateLeadDto) {
    const score = this.scoreLead(dto);

    return {
      id: crypto.randomUUID(),
      ...dto,
      score,
      temperature: this.temperatureFromScore(score),
      createdAt: new Date().toISOString()
    };
  }

  private scoreLead(dto: CreateLeadDto) {
    const budgetScore = dto.budgetRange.includes("550") ? 35 : dto.budgetRange.includes("350") ? 28 : 22;
    const timelineScore = dto.purchaseTimeline === "now" ? 45 : dto.purchaseTimeline === "quarter" ? 30 : 14;
    const sourceScore = dto.source === "referral" ? 12 : 8;

    return Math.min(100, budgetScore + timelineScore + sourceScore);
  }

  private temperatureFromScore(score: number): LeadTemperature {
    if (score >= 75) return "hot";
    if (score >= 45) return "warm";
    return "cold";
  }
}
