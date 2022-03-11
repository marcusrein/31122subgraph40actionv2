import { PoolCreated } from "../../generated/WeightedPoolFactory/WeightedPoolFactory";
import { LOG_NEW_POOL } from "../../generated/Factory/Factory";
import {
	processPoolCreated,
	processPoolCreatedv1,
} from "../Balancer/poolManager";

export function handleNewWeightedPool(event: PoolCreated): void {
	processPoolCreated(event);
}

export function handleNewLiquidityBootstrappingPool(event: PoolCreated): void {
	processPoolCreated(event);
}

export function handleNewInvestmentPool(event: PoolCreated): void {
	processPoolCreated(event);
}

export function handleNewStablePool(event: PoolCreated): void {
	processPoolCreated(event);
}

export function handleNewMetaStablePool(event: PoolCreated): void {
	processPoolCreated(event);
}

export function handleNewStablePhantomPool(event: PoolCreated): void {
	processPoolCreated(event);
}

export function handleNewCCPPool(event: PoolCreated): void {
	processPoolCreated(event);
}

export function handleNewLinearPool(event: PoolCreated): void {
	processPoolCreated(event);
}

export function handleNewv1Pool(event: LOG_NEW_POOL): void {
	processPoolCreatedv1(event);
}
