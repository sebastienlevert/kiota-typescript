import {serializeSite} from '../serializeSite';
import {SiteSource} from './index';
import {serializeDataSource} from './serializeDataSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSiteSource(writer: SerializationWriter, siteSource: SiteSource | undefined = {}) : void {
        serializeDataSource(writer, siteSource)
            writer.writeObjectValueFromMethod("site", siteSource.site as any, serializeSite);
}
