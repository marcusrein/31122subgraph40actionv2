import { BadgeMetric } from "../../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts/index";


export const BADGE_METRIC_BALANCER_POOLS_CREATED = "BALANCER_POOLS_CREATED";
export const BADGE_METRIC_BALANCER_POOLS_CREATED_V1 = "BALANCER_POOLS_CREATED_V1";
export const BADGE_METRIC_BALANCER_POOLS_CREATED_V2 = "BALANCER_POOLS_CREATED_V2";
export const BADGE_METRIC_BALANCER_SWAPS_COUNT = "BALANCER_SWAPS_COUNT";
export const BADGE_METRIC_BALANCER_SWAPS_COUNT_V1 = "BALANCER_SWAPS_COUNT_V1";
export const BADGE_METRIC_BALANCER_SWAPS_COUNT_V2 = "BALANCER_SWAPS_COUNT_V2";                // not yet implemented
export const BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT = "BALANCER_POOLS_JOINED_COUNT";
export const BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT_V1 = "BALANCER_POOLS_JOINED_COUNT_V1";
export const BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT_V2 = "BALANCER_POOLS_JOINED_COUNT_V2";  // not yet implemented



export function generateBadgeMetrics(): void {
  createBadgeMetric(0, BADGE_METRIC_BALANCER_POOLS_CREATED);
  createBadgeMetric(1, BADGE_METRIC_BALANCER_POOLS_CREATED_V1);
  createBadgeMetric(2, BADGE_METRIC_BALANCER_POOLS_CREATED_V2);
  createBadgeMetric(3, BADGE_METRIC_BALANCER_SWAPS_COUNT);
  createBadgeMetric(4, BADGE_METRIC_BALANCER_SWAPS_COUNT_V1);
  createBadgeMetric(5, BADGE_METRIC_BALANCER_SWAPS_COUNT_V2);
  createBadgeMetric(6, BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT);
  createBadgeMetric(7, BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT_V1);
  createBadgeMetric(8, BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT_V2);
}

function createBadgeMetric(metricNumber: i32, metricName: string): void {
  const badgeMetricId = BigInt.fromI32(metricNumber).toString();
  let badgeMetric = BadgeMetric.load(badgeMetricId);
  if (badgeMetric == null) {
    badgeMetric = new BadgeMetric(badgeMetricId);
    badgeMetric.metricNumber = metricNumber;
    badgeMetric.metricName = metricName;
    badgeMetric.save();
  }
}
