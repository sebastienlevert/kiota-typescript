import {Contract} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContract(writer: SerializationWriter, contract: Contract | undefined = {}) : void {
        serializeDirectoryObject(writer, contract)
            writer.writeStringValue("contractType", contract.contractType);
            writer.writeStringValue("customerId", contract.customerId);
            writer.writeStringValue("defaultDomainName", contract.defaultDomainName);
            writer.writeStringValue("displayName", contract.displayName);
}
