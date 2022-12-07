import {OnenoteEntityBaseModel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteEntitySchemaObjectModel extends OnenoteEntityBaseModel, Partial<Parsable> {
    /** The createdDateTime property */
    createdDateTime?: Date;
}
