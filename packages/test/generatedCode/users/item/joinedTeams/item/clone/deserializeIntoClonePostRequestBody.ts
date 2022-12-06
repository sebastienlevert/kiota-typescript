import {ClonableTeamParts} from '../../../../../models/clonableTeamParts';
import {TeamVisibilityType} from '../../../../../models/teamVisibilityType';
import {ClonePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClonePostRequestBody(clonePostRequestBody: ClonePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "classification": n => { clonePostRequestBody.classification = n.getStringValue() as any ; },
        "description": n => { clonePostRequestBody.description = n.getStringValue() as any ; },
        "displayName": n => { clonePostRequestBody.displayName = n.getStringValue() as any ; },
        "mailNickname": n => { clonePostRequestBody.mailNickname = n.getStringValue() as any ; },
        "partsToClone": n => { clonePostRequestBody.partsToClone = n.getEnumValue<ClonableTeamParts>(ClonableTeamParts) as any ; },
        "visibility": n => { clonePostRequestBody.visibility = n.getEnumValue<TeamVisibilityType>(TeamVisibilityType) as any ; },
    }
}
