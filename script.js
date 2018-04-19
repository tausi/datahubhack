/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getParticipantRegistry */

/**	
 * Add a claim to that has been flagged to the chain
 * @param {org.acme.vehicle.claim.AddClaim} Claim - the claim
 * @transaction
 */
async function addClaim (AddClaim){
	let claim = AddClaim.claim;
	let claimAmount = AddClaim.claimAmount;
	let report = AddClaim.report;
	
	//by default the claim should be flagged as 
	const vehicleclaimRegistry = await getAssetRegistry('org.acme.vehicle.claim.Claim');
    await vehicleclaimRegistry.update(claim);
}


/**	
 * Update a claim to that has been added to the chain
 * @param {org.acme.vehicle.claim.UpdateClaim} Claim - the claim
 * @transaction
 */
async function updateClaim (UpdateClaim){
	let claim = UpdateClaim.claim;
	let claimAmount = UpdateClaim.claimAmount;
	let report = UpdateClaim.report;
	
	claim.status = 'DECLINED'
	report.status = 'CLOSED'
	
	const vehicleclaimRegistry = await getAssetRegistry('org.acme.vehicle.claim.Claim');
    await vehicleclaimRegistry.update(claim);
}