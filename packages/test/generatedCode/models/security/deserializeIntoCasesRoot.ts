import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoEdiscoveryCase} from './deserializeIntoEdiscoveryCase';
import {CasesRoot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCasesRoot(casesRoot: CasesRoot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(casesRoot),
        "ediscoveryCases": n => { casesRoot.ediscoveryCases = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEdiscoveryCase) as any ; },
    }
}
