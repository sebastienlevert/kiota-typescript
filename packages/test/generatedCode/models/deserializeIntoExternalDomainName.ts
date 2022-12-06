import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ExternalDomainName} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalDomainName(externalDomainName: ExternalDomainName | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalDomainName),
    }
}
