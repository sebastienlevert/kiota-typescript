import {RegistryKeyState} from './index';
import {RegistryHive} from './registryHive';
import {RegistryOperation} from './registryOperation';
import {RegistryValueType} from './registryValueType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRegistryKeyState(registryKeyState: RegistryKeyState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "hive": n => { registryKeyState.hive = n.getEnumValue<RegistryHive>(RegistryHive) as any ; },
        "key": n => { registryKeyState.key = n.getStringValue() as any ; },
        "@odata.type": n => { registryKeyState.odataType = n.getStringValue() as any ; },
        "oldKey": n => { registryKeyState.oldKey = n.getStringValue() as any ; },
        "oldValueData": n => { registryKeyState.oldValueData = n.getStringValue() as any ; },
        "oldValueName": n => { registryKeyState.oldValueName = n.getStringValue() as any ; },
        "operation": n => { registryKeyState.operation = n.getEnumValue<RegistryOperation>(RegistryOperation) as any ; },
        "processId": n => { registryKeyState.processId = n.getNumberValue() as any ; },
        "valueData": n => { registryKeyState.valueData = n.getStringValue() as any ; },
        "valueName": n => { registryKeyState.valueName = n.getStringValue() as any ; },
        "valueType": n => { registryKeyState.valueType = n.getEnumValue<RegistryValueType>(RegistryValueType) as any ; },
    }
}
