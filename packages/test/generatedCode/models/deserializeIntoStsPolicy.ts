import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {StsPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStsPolicy(stsPolicy: StsPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(stsPolicy),
        "appliesTo": n => { stsPolicy.appliesTo = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "definition": n => { stsPolicy.definition = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "isOrganizationDefault": n => { stsPolicy.isOrganizationDefault = n.getBooleanValue() as any ; },
    }
}
