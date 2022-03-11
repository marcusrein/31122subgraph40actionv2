import { BigInt } from "@graphprotocol/graph-ts";
import { createOrLoadBadgeDefinition, createOrLoadBadgeUser } from "../Emblem/emblemModels";
import {
  BADGE_METRIC_BALANCER_POOLS_CREATED, BADGE_METRIC_BALANCER_POOLS_CREATED_V1, BADGE_METRIC_BALANCER_POOLS_CREATED_V2, BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT, BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT_V1, BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT_V2, BADGE_METRIC_BALANCER_SWAPS_COUNT, BADGE_METRIC_BALANCER_SWAPS_COUNT_V1, BADGE_METRIC_BALANCER_SWAPS_COUNT_V2
} from "./metrics";

// In order for retroactive badge drops to cover the entire subgraph
// history, this function needs to be called from the first event.
export function generateGenesisBadgeDefinitions(): void {
  //////// INDEXER BADGES ////////

  createOrLoadBadgeDefinition(
    "Swimmer I",
    "Create a Balancer pool",
    BADGE_METRIC_BALANCER_POOLS_CREATED,
    BigInt.fromI32(1),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Swimmer II",
    "Create 5 Balancer pools",
    BADGE_METRIC_BALANCER_POOLS_CREATED,
    BigInt.fromI32(5),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Swimmer III",
    "Create 10 Balancer pools",
    BADGE_METRIC_BALANCER_POOLS_CREATED,
    BigInt.fromI32(10),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "OG Swimmer I",
    "Create a Balancer V1 pool",
    BADGE_METRIC_BALANCER_POOLS_CREATED_V1,
    BigInt.fromI32(1),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Fresh Swimmer I",
    "Create a Balancer V2 pool",
    BADGE_METRIC_BALANCER_POOLS_CREATED_V2,
    BigInt.fromI32(1),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Provider I",
    "Provide Liquidity in a Balancer Pool",
    BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT,
    BigInt.fromI32(1),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Provider II",
    "Provide Liquidity in 3 Balancer Pools",
    BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT,
    BigInt.fromI32(3),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Provider III",
    "Provide Liquidity in 10 Balancer Pools",
    BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT,
    BigInt.fromI32(10),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "OG Provider I",
    "Provide Liquidity in a Balancer V1 Pool",
    BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT_V1,
    BigInt.fromI32(1),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Fresh Provider I",
    "Provide Liquidity in a Balancer V2 Pool",
    BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT_V2,
    BigInt.fromI32(1),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Swapper I",
    "Execute a swap",
    BADGE_METRIC_BALANCER_SWAPS_COUNT,
    BigInt.fromI32(1),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Swapper II",
    "Execute 5 swaps between unique token pairs",
    BADGE_METRIC_BALANCER_SWAPS_COUNT,
    BigInt.fromI32(5),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Swapper III",
    "Execute 10 swaps between unique token pairs",
    BADGE_METRIC_BALANCER_SWAPS_COUNT,
    BigInt.fromI32(10),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "OG Swapper I",
    "Execute a swap in a Balancer V1 Pool",
    BADGE_METRIC_BALANCER_SWAPS_COUNT_V1,
    BigInt.fromI32(1),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Fresh Swapper I",
    "Execute a swap in a Balancer V2 Pool",
    BADGE_METRIC_BALANCER_SWAPS_COUNT_V2,
    BigInt.fromI32(1),
    BigInt.fromI32(1),
    ""
  );
}
