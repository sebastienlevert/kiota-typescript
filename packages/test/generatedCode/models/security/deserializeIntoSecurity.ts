import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoInformationProtection} from './deserializeIntoInformationProtection';
import {Security} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurity(security: Security | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(security),
        "informationProtection": n => { security.informationProtection = n.getObject(deserializeIntoInformationProtection) as any ; },
    }
}
