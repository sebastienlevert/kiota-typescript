import {serializeEntity} from '../serializeEntity';
import {CasesRoot} from './index';
import {serializeEdiscoveryCase} from './serializeEdiscoveryCase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCasesRoot(writer: SerializationWriter, casesRoot: CasesRoot | undefined = {}) : void {
        serializeEntity(writer, casesRoot)
            writer.writeCollectionOfObjectValuesFromMethod("ediscoveryCases", casesRoot.ediscoveryCases as any, serializeEdiscoveryCase);
}
