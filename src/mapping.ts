import { BigInt, log } from "@graphprotocol/graph-ts";
import {
	Contract,
	Approval,
	MinterAdded,
	MinterRemoved,
	NewOwnership,
	NewPendingOwnership,
	Transfer,
} from "../generated/Contract/Contract";
import { SuperBadge, AwesomeBadge } from "../generated/schema";

export function handleApproval(event: Approval): void {
	// Entities can be loaded from the store using a string ID; this ID
	// needs to be unique across all entities of the same type
	let entity = SuperBadge.load(event.transaction.from.toHex());

	// Entities only exist after they have been saved to the store;
	// `null` checks allow to create entities on demand
	if (!entity) {
		entity = new SuperBadge(event.transaction.from.toHex());

		// 	// Entity fields can be set using simple assignments
		entity.id = event.params.owner.toString();
		entity.value = event.params.value;
		// }

		// // BigInt and BigDecimal math are supported
		// entity.count = entity.count + BigInt.fromI32(1);

		// // Entity fields can be set based on event parameters
		// entity.owner = event.params.owner;
		// entity.spender = event.params.spender;

		// // Entities can be written to the store with `.save()`
		entity.save();
	}
	log.info("+++HandleApproval Triggered' fxn: {}", [entity.id]);
}
// Note: If a handler doesn't require existing field values, it is faster
// _not_ to load the entity from the store. Instead, create it fresh with
// `new Entity(...)`, set the fields that should be updated and save the
// entity back to the store. Fields that were not set or unset remain
// unchanged, allowing for partial updates to be applied.

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.allowance(...)
// - contract.approve(...)
// - contract.balanceOf(...)
// - contract.decimals(...)
// - contract.decreaseAllowance(...)
// - contract.governor(...)
// - contract.increaseAllowance(...)
// - contract.isMinter(...)
// - contract.name(...)
// - contract.nonces(...)
// - contract.pendingGovernor(...)
// - contract.symbol(...)
// - contract.totalSupply(...)
// - contract.transfer(...)
// - contract.transferFrom(...)

export function handleMinterAdded(event: MinterAdded): void {
	let entity = SuperBadge.load(event.transaction.from.toHex());
	if (!entity) {
		entity = new SuperBadge(event.transaction.from.toHex());
		entity.id = event.params.account.toHexString();
		entity.save();
	}
	log.info("+++handleMinterAdded Triggered' fxn: {}", [entity.id]);
}
export function handleMinterRemoved(event: MinterRemoved): void {
	let entity = SuperBadge.load(event.transaction.from.toHex());
	if (!entity) {
		entity = new SuperBadge(event.transaction.from.toHex());
		entity.id = event.params.account.toHexString();
		entity.save();
	}
	log.info("+++handleMinterRemoved Triggered' fxn: {}", [entity.id]);
}

export function handleNewOwnership(event: NewOwnership): void {
	let entity = SuperBadge.load(event.transaction.from.toHex());
	if (!entity) {
		entity = new SuperBadge(event.transaction.from.toHex());
		entity.id = event.params.from.toHexString();
		entity.save();
	}
	log.info("+++handleNewOwnership Triggered' fxn: {}", [entity.id]);
}

export function handleNewPendingOwnership(event: NewPendingOwnership): void {
	let entity = SuperBadge.load(event.transaction.from.toHex());
	if (!entity) {
		entity = new SuperBadge(event.transaction.from.toHex());
		entity.id = event.params.from.toHexString();
		entity.save();
	}
	log.info("+++NewPendingOwnership Triggered' fxn: {}", [entity.id]);
}

export function handleTransfer(event: Transfer): void {
	let entity = SuperBadge.load(event.transaction.from.toHex());
	if (!entity) {
		entity = new SuperBadge(event.transaction.from.toHex());
		entity.id = event.params.from.toHexString();
		entity.save();
	}
	log.info("+++handleTransfer Triggered' fxn: {}", [entity.id]);
}
