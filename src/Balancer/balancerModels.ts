import { Address } from "@graphprotocol/graph-ts";
import {
	BalancerUser,
	ERC20Token,
	BalancerUserPoolJoin,
	BalancerUserPoolSwap,
	BalancerPool,
} from "../../generated/schema";
import {
	createOrLoadBadgeUser,
	EarnedBadgeEventData,
} from "../Emblem/emblemModels";
import { incrementProgress } from "../Emblem/metricProgress";
import {
	BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT,
	BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT_V1,
	BADGE_METRIC_BALANCER_SWAPS_COUNT,
	BADGE_METRIC_BALANCER_SWAPS_COUNT_V1,
} from "../Emblem/metrics";

export function createOrLoadBalancerUser(address: string): BalancerUser {
	let user = BalancerUser.load(address);
	if (user == null) {
		user = new BalancerUser(address);
		user.save();

		createOrLoadBadgeUser(address);
	}

	return user;
}

export function createOrLoadBalancerUserPoolJoin(
	balancerUserId: string,
	poolId: string,
	eventData: EarnedBadgeEventData
): BalancerUserPoolJoin {
	const balancerUserPoolJoinId = balancerUserId.concat("-").concat(poolId);
	let balancerUserPoolJoin = BalancerUserPoolJoin.load(
		balancerUserPoolJoinId
	);
	if (balancerUserPoolJoin == null) {
		balancerUserPoolJoin = new BalancerUserPoolJoin(balancerUserPoolJoinId);
		balancerUserPoolJoin.user = balancerUserId;
		balancerUserPoolJoin.pool = poolId;
		balancerUserPoolJoin.save();

		incrementProgress(
			balancerUserId,
			BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT,
			eventData
		);
		incrementProgress(
			balancerUserId,
			BADGE_METRIC_BALANCER_POOLS_JOINED_COUNT_V1,
			eventData
		);
	}
	return balancerUserPoolJoin;
}

export function createOrLoadBalancerUserPoolSwap(
	balancerUserId: string,
	poolId: string,
	eventData: EarnedBadgeEventData
): BalancerUserPoolSwap {
	const balancerUserPoolSwapId = balancerUserId.concat("-").concat(poolId);
	let balancerUserPoolSwap = BalancerUserPoolSwap.load(
		balancerUserPoolSwapId
	);
	if (balancerUserPoolSwap == null) {
		balancerUserPoolSwap = new BalancerUserPoolSwap(balancerUserPoolSwapId);
		balancerUserPoolSwap.user = balancerUserId;
		balancerUserPoolSwap.pool = poolId;
		balancerUserPoolSwap.save();

		incrementProgress(
			balancerUserId,
			BADGE_METRIC_BALANCER_SWAPS_COUNT,
			eventData
		);
		incrementProgress(
			balancerUserId,
			BADGE_METRIC_BALANCER_SWAPS_COUNT_V1,
			eventData
		);
	}
	return balancerUserPoolSwap;
}

export function createOrLoadBalancerPool(
	poolAddress: string,
	version: i32
): BalancerPool {
	let pool = BalancerPool.load(poolAddress);
	if (pool == null) {
		pool = new BalancerPool(poolAddress);
		pool.version = version;
		pool.save();
	}
	return pool;
}
