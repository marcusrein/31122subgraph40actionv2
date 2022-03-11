import { PoolCreated } from "../../generated/WeightedPoolFactory/WeightedPoolFactory";
import { LOG_JOIN, LOG_SWAP } from "../../generated/templates/Pool/Pool";
import { LOG_NEW_POOL } from "../../generated/Factory/Factory";
import {
	createOrLoadBalancerPool,
	createOrLoadBalancerUserPoolJoin,
	createOrLoadBalancerUserPoolSwap,
} from "./balancerModels";
import { incrementProgress } from "../Emblem/metricProgress";
import {
	BADGE_METRIC_BALANCER_POOLS_CREATED,
	BADGE_METRIC_BALANCER_POOLS_CREATED_V1,
	BADGE_METRIC_BALANCER_POOLS_CREATED_V2,
} from "../Emblem/metrics";
import {
	createOrLoadEmblemEntityStats,
	EarnedBadgeEventData,
} from "../Emblem/emblemModels";
import { Pool } from "../../generated/templates";

export function processPoolCreated(event: PoolCreated): void {
	const eventData = new EarnedBadgeEventData(event);
	const userAddressString = event.transaction.from.toHexString();
	createOrLoadBalancerPool(event.params.pool.toHexString(), 2);

	incrementProgress(
		userAddressString,
		BADGE_METRIC_BALANCER_POOLS_CREATED,
		eventData
	);
	incrementProgress(
		userAddressString,
		BADGE_METRIC_BALANCER_POOLS_CREATED_V2,
		eventData
	);
}

export function processPoolCreatedv1(event: LOG_NEW_POOL): void {
	const eventData = new EarnedBadgeEventData(event);
	const userAddressString = event.transaction.from.toHexString();

	// hacky way to initialize metrics and genesis badge definitions
	// (creating a v1 pool is the first event this subgraph picks up)
	createOrLoadEmblemEntityStats();

	createOrLoadBalancerPool(event.params.pool.toHexString(), 1);

	// generates new contract from dataSourceTemplate
	Pool.create(event.params.pool);

	incrementProgress(
		userAddressString,
		BADGE_METRIC_BALANCER_POOLS_CREATED,
		eventData
	);
	incrementProgress(
		userAddressString,
		BADGE_METRIC_BALANCER_POOLS_CREATED_V1,
		eventData
	);
}

export function processPoolSwapv1(event: LOG_SWAP): void {
	const eventData = new EarnedBadgeEventData(event);
	const userAddressString = event.transaction.from.toHexString();
	const poolAddress = event.address.toHexString();

	createOrLoadBalancerUserPoolSwap(userAddressString, poolAddress, eventData);
}

export function processPoolJoinv1(event: LOG_JOIN): void {
	const eventData = new EarnedBadgeEventData(event);
	const userAddressString = event.params.caller.toHexString();
	const poolId = event.address.toHex();

	createOrLoadBalancerUserPoolJoin(userAddressString, poolId, eventData);
}
