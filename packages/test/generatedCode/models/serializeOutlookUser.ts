import {OutlookUser} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeOutlookCategory} from './serializeOutlookCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookUser(writer: SerializationWriter, outlookUser: OutlookUser | undefined = {}) : void {
        serializeEntity(writer, outlookUser)
            writer.writeCollectionOfObjectValuesFromMethod("masterCategories", outlookUser.masterCategories as any, serializeOutlookCategory);
}
