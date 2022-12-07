import {createPositionDetailFromDiscriminatorValue} from './createPositionDetailFromDiscriminatorValue';
import {createRelatedPersonFromDiscriminatorValue} from './createRelatedPersonFromDiscriminatorValue';
import {ItemFacet, PositionDetail, RelatedPerson} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkPosition extends ItemFacet implements Parsable {
    /** Categories that the user has associated with this position. */
    private _categories?: string[] | undefined;
    /** Colleagues that are associated with this position. */
    private _colleagues?: RelatedPerson[] | undefined;
    /** The detail property */
    private _detail?: PositionDetail | undefined;
    /** Denotes whether or not the position is current. */
    private _isCurrent?: boolean | undefined;
    /** The manager property */
    private _manager?: RelatedPerson | undefined;
    /**
     * Gets the categories property value. Categories that the user has associated with this position.
     * @returns a string
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. Categories that the user has associated with this position.
     * @param value Value to set for the categories property.
     */
    public set categories(value: string[] | undefined) {
        this._categories = value;
    };
    /**
     * Gets the colleagues property value. Colleagues that are associated with this position.
     * @returns a relatedPerson
     */
    public get colleagues() {
        return this._colleagues;
    };
    /**
     * Sets the colleagues property value. Colleagues that are associated with this position.
     * @param value Value to set for the colleagues property.
     */
    public set colleagues(value: RelatedPerson[] | undefined) {
        this._colleagues = value;
    };
    /**
     * Instantiates a new workPosition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the detail property value. The detail property
     * @returns a positionDetail
     */
    public get detail() {
        return this._detail;
    };
    /**
     * Sets the detail property value. The detail property
     * @param value Value to set for the detail property.
     */
    public set detail(value: PositionDetail | undefined) {
        this._detail = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "categories": n => { this.categories = n.getCollectionOfPrimitiveValues<string>(); },
            "colleagues": n => { this.colleagues = n.getCollectionOfObjectValues<RelatedPerson>(createRelatedPersonFromDiscriminatorValue); },
            "detail": n => { this.detail = n.getObjectValue<PositionDetail>(createPositionDetailFromDiscriminatorValue); },
            "isCurrent": n => { this.isCurrent = n.getBooleanValue(); },
            "manager": n => { this.manager = n.getObjectValue<RelatedPerson>(createRelatedPersonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isCurrent property value. Denotes whether or not the position is current.
     * @returns a boolean
     */
    public get isCurrent() {
        return this._isCurrent;
    };
    /**
     * Sets the isCurrent property value. Denotes whether or not the position is current.
     * @param value Value to set for the isCurrent property.
     */
    public set isCurrent(value: boolean | undefined) {
        this._isCurrent = value;
    };
    /**
     * Gets the manager property value. The manager property
     * @returns a relatedPerson
     */
    public get manager() {
        return this._manager;
    };
    /**
     * Sets the manager property value. The manager property
     * @param value Value to set for the manager property.
     */
    public set manager(value: RelatedPerson | undefined) {
        this._manager = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        writer.writeCollectionOfObjectValues<RelatedPerson>("colleagues", this.colleagues);
        writer.writeObjectValue<PositionDetail>("detail", this.detail);
        writer.writeBooleanValue("isCurrent", this.isCurrent);
        writer.writeObjectValue<RelatedPerson>("manager", this.manager);
    };
}
