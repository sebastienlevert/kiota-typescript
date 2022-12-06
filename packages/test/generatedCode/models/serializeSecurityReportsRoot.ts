import {SecurityReportsRoot} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurityReportsRoot(writer: SerializationWriter, securityReportsRoot: SecurityReportsRoot | undefined = {}) : void {
        serializeEntity(writer, securityReportsRoot)
}
