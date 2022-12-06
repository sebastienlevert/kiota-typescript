import {AppCatalogs} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeTeamsApp} from './serializeTeamsApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppCatalogs(writer: SerializationWriter, appCatalogs: AppCatalogs | undefined = {}) : void {
        serializeEntity(writer, appCatalogs)
            writer.writeCollectionOfObjectValuesFromMethod("teamsApps", appCatalogs.teamsApps as any, serializeTeamsApp);
}
