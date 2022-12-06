import {NotebookCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeNotebook} from './serializeNotebook';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotebookCollectionResponse(writer: SerializationWriter, notebookCollectionResponse: NotebookCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, notebookCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", notebookCollectionResponse.value as any, serializeNotebook);
}
