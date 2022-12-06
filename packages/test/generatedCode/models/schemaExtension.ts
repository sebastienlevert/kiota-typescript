import {Entity, ExtensionSchemaProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SchemaExtension extends Entity, Partial<Parsable> {
    /** Description for the schema extension. Supports $filter (eq). */
    description?: string;
    /** The appId of the application that is the owner of the schema extension. This property can be supplied on creation, to set the owner.  If not supplied, then the calling application's appId will be set as the owner. In either case, the signed-in user must be the owner of the application. So, for example, if creating a new schema extension definition using Graph Explorer, you must supply the owner property. Once set, this property is read-only and cannot be changed. Supports $filter (eq). */
    owner?: string;
    /** The collection of property names and types that make up the schema extension definition. */
    properties?: ExtensionSchemaProperty[];
    /** The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. For more information about the possible state transitions and behaviors, see Schema extensions lifecycle. Supports $filter (eq). */
    status?: string;
    /** Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from administrativeUnit, contact, device, event, group, message, organization, post, todoTask, todoTaskList, or user. */
    targetTypes?: string[];
}
