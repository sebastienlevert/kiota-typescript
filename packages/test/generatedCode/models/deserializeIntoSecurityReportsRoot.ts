import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SecurityReportsRoot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityReportsRoot(securityReportsRoot: SecurityReportsRoot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(securityReportsRoot),
    }
}
