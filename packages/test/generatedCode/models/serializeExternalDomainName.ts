import {ExternalDomainName} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalDomainName(writer: SerializationWriter, externalDomainName: ExternalDomainName | undefined = {}) : void {
        serializeEntity(writer, externalDomainName)
}
