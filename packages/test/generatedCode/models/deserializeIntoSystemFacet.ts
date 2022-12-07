import {SystemFacet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSystemFacet(systemFacet: SystemFacet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
