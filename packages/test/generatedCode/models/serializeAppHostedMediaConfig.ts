import {AppHostedMediaConfig} from './index';
import {serializeMediaConfig} from './serializeMediaConfig';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppHostedMediaConfig(writer: SerializationWriter, appHostedMediaConfig: AppHostedMediaConfig | undefined = {}) : void {
        serializeMediaConfig(writer, appHostedMediaConfig)
            writer.writeStringValue("blob", appHostedMediaConfig.blob);
}
