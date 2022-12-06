import {WebApplication} from './index';
import {serializeImplicitGrantSettings} from './serializeImplicitGrantSettings';
import {serializeRedirectUriSettings} from './serializeRedirectUriSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWebApplication(writer: SerializationWriter, webApplication: WebApplication | undefined = {}) : void {
            writer.writeStringValue("homePageUrl", webApplication.homePageUrl);
            writer.writeObjectValueFromMethod("implicitGrantSettings", webApplication.implicitGrantSettings as any, serializeImplicitGrantSettings);
            writer.writeStringValue("logoutUrl", webApplication.logoutUrl);
            writer.writeStringValue("@odata.type", webApplication.odataType);
            writer.writeCollectionOfPrimitiveValues<string>("redirectUris", webApplication.redirectUris);
            writer.writeCollectionOfObjectValuesFromMethod("redirectUriSettings", webApplication.redirectUriSettings as any, serializeRedirectUriSettings);
}
