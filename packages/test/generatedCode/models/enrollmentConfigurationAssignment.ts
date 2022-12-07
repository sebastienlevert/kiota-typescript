import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentSource} from './deviceAndAppManagementAssignmentSource';
import {DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Enrollment Configuration Assignment */
export class EnrollmentConfigurationAssignment extends Entity implements Parsable {
    /** Represents source of assignment. */
    private _source?: DeviceAndAppManagementAssignmentSource | undefined;
    /** Identifier for resource used for deployment to a group */
    private _sourceId?: string | undefined;
    /** Base type for assignment targets. */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new enrollmentConfigurationAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "source": n => { this.source = n.getEnumValue<DeviceAndAppManagementAssignmentSource>(DeviceAndAppManagementAssignmentSource); },
            "sourceId": n => { this.sourceId = n.getStringValue(); },
            "target": n => { this.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<DeviceAndAppManagementAssignmentSource>("source", this.source);
        writer.writeStringValue("sourceId", this.sourceId);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", this.target);
    };
    /**
     * Gets the source property value. Represents source of assignment.
     * @returns a deviceAndAppManagementAssignmentSource
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. Represents source of assignment.
     * @param value Value to set for the source property.
     */
    public set source(value: DeviceAndAppManagementAssignmentSource | undefined) {
        this._source = value;
    };
    /**
     * Gets the sourceId property value. Identifier for resource used for deployment to a group
     * @returns a string
     */
    public get sourceId() {
        return this._sourceId;
    };
    /**
     * Sets the sourceId property value. Identifier for resource used for deployment to a group
     * @param value Value to set for the sourceId property.
     */
    public set sourceId(value: string | undefined) {
        this._sourceId = value;
    };
    /**
     * Gets the target property value. Base type for assignment targets.
     * @returns a deviceAndAppManagementAssignmentTarget
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. Base type for assignment targets.
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        this._target = value;
    };
}
