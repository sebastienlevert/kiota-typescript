import {DeviceManagementExchangeConnectorSyncType} from '../../../../models/deviceManagementExchangeConnectorSyncType';
import {SyncPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSyncPostRequestBody(syncPostRequestBody: SyncPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "syncType": n => { syncPostRequestBody.syncType = n.getEnumValue<DeviceManagementExchangeConnectorSyncType>(DeviceManagementExchangeConnectorSyncType) as any ; },
    }
}
