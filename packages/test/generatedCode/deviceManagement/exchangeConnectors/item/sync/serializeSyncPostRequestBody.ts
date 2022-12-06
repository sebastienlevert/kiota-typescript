import {DeviceManagementExchangeConnectorSyncType} from '../../../../models/deviceManagementExchangeConnectorSyncType';
import {SyncPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSyncPostRequestBody(writer: SerializationWriter, syncPostRequestBody: SyncPostRequestBody | undefined = {}) : void {
            writer.writeEnumValue<DeviceManagementExchangeConnectorSyncType>("syncType", syncPostRequestBody.syncType);
}
