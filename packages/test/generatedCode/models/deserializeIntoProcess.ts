import {deserializeIntoFileHash} from './deserializeIntoFileHash';
import {Process} from './index';
import {ProcessIntegrityLevel} from './processIntegrityLevel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProcess(process: Process | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "accountName": n => { process.accountName = n.getStringValue() as any ; },
        "commandLine": n => { process.commandLine = n.getStringValue() as any ; },
        "createdDateTime": n => { process.createdDateTime = n.getDateValue() as any ; },
        "fileHash": n => { process.fileHash = n.getObject(deserializeIntoFileHash) as any ; },
        "integrityLevel": n => { process.integrityLevel = n.getEnumValue<ProcessIntegrityLevel>(ProcessIntegrityLevel) as any ; },
        "isElevated": n => { process.isElevated = n.getBooleanValue() as any ; },
        "name": n => { process.name = n.getStringValue() as any ; },
        "@odata.type": n => { process.odataType = n.getStringValue() as any ; },
        "parentProcessCreatedDateTime": n => { process.parentProcessCreatedDateTime = n.getDateValue() as any ; },
        "parentProcessId": n => { process.parentProcessId = n.getNumberValue() as any ; },
        "parentProcessName": n => { process.parentProcessName = n.getStringValue() as any ; },
        "path": n => { process.path = n.getStringValue() as any ; },
        "processId": n => { process.processId = n.getNumberValue() as any ; },
    }
}
