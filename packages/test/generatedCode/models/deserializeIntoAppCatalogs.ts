import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoTeamsApp} from './deserializeIntoTeamsApp';
import {AppCatalogs} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppCatalogs(appCatalogs: AppCatalogs | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appCatalogs),
        "teamsApps": n => { appCatalogs.teamsApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsApp) as any ; },
    }
}
