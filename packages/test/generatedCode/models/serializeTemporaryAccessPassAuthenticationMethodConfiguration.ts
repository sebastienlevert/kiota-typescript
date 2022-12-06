import {TemporaryAccessPassAuthenticationMethodConfiguration} from './index';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTemporaryAccessPassAuthenticationMethodConfiguration(writer: SerializationWriter, temporaryAccessPassAuthenticationMethodConfiguration: TemporaryAccessPassAuthenticationMethodConfiguration | undefined = {}) : void {
        serializeAuthenticationMethodConfiguration(writer, temporaryAccessPassAuthenticationMethodConfiguration)
            writer.writeNumberValue("defaultLength", temporaryAccessPassAuthenticationMethodConfiguration.defaultLength);
            writer.writeNumberValue("defaultLifetimeInMinutes", temporaryAccessPassAuthenticationMethodConfiguration.defaultLifetimeInMinutes);
            writer.writeCollectionOfObjectValuesFromMethod("includeTargets", temporaryAccessPassAuthenticationMethodConfiguration.includeTargets as any, serializeAuthenticationMethodTarget);
            writer.writeBooleanValue("isUsableOnce", temporaryAccessPassAuthenticationMethodConfiguration.isUsableOnce);
            writer.writeNumberValue("maximumLifetimeInMinutes", temporaryAccessPassAuthenticationMethodConfiguration.maximumLifetimeInMinutes);
            writer.writeNumberValue("minimumLifetimeInMinutes", temporaryAccessPassAuthenticationMethodConfiguration.minimumLifetimeInMinutes);
}
