import {createFilterGroupFromDiscriminatorValue} from './createFilterGroupFromDiscriminatorValue';
import {FilterGroup} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Filter implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** *Experimental* Filter group set used to decide whether given object belongs and should be processed as part of this object mapping. An object is considered in scope if ANY of the groups in the collection is evaluated to true. */
    private _categoryFilterGroups?: FilterGroup[] | undefined;
    /** Filter group set used to decide whether given object is in scope for provisioning. This is the filter which should be used in most cases. If an object used to satisfy this filter at a given moment, and then the object or the filter was changed so that filter is not satisfied any longer, such object will get de-provisioned'. An object is considered in scope if ANY of the groups in the collection is evaluated to true. */
    private _groups?: FilterGroup[] | undefined;
    /** *Experimental* Filter group set used to filter out objects at the early stage of reading them from the directory. If an object doesn't satisfy this filter it will not be processed further. Important to understand is that if an object used to satisfy this filter at a given moment, and then the object or the filter was changed so that filter is no longer satisfied, such object will NOT get de-provisioned. An object is considered in scope if ANY of the groups in the collection is evaluated to true. */
    private _inputFilterGroups?: FilterGroup[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the categoryFilterGroups property value. *Experimental* Filter group set used to decide whether given object belongs and should be processed as part of this object mapping. An object is considered in scope if ANY of the groups in the collection is evaluated to true.
     * @returns a filterGroup
     */
    public get categoryFilterGroups() {
        return this._categoryFilterGroups;
    };
    /**
     * Sets the categoryFilterGroups property value. *Experimental* Filter group set used to decide whether given object belongs and should be processed as part of this object mapping. An object is considered in scope if ANY of the groups in the collection is evaluated to true.
     * @param value Value to set for the categoryFilterGroups property.
     */
    public set categoryFilterGroups(value: FilterGroup[] | undefined) {
        this._categoryFilterGroups = value;
    };
    /**
     * Instantiates a new filter and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "categoryFilterGroups": n => { this.categoryFilterGroups = n.getCollectionOfObjectValues<FilterGroup>(createFilterGroupFromDiscriminatorValue); },
            "groups": n => { this.groups = n.getCollectionOfObjectValues<FilterGroup>(createFilterGroupFromDiscriminatorValue); },
            "inputFilterGroups": n => { this.inputFilterGroups = n.getCollectionOfObjectValues<FilterGroup>(createFilterGroupFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the groups property value. Filter group set used to decide whether given object is in scope for provisioning. This is the filter which should be used in most cases. If an object used to satisfy this filter at a given moment, and then the object or the filter was changed so that filter is not satisfied any longer, such object will get de-provisioned'. An object is considered in scope if ANY of the groups in the collection is evaluated to true.
     * @returns a filterGroup
     */
    public get groups() {
        return this._groups;
    };
    /**
     * Sets the groups property value. Filter group set used to decide whether given object is in scope for provisioning. This is the filter which should be used in most cases. If an object used to satisfy this filter at a given moment, and then the object or the filter was changed so that filter is not satisfied any longer, such object will get de-provisioned'. An object is considered in scope if ANY of the groups in the collection is evaluated to true.
     * @param value Value to set for the groups property.
     */
    public set groups(value: FilterGroup[] | undefined) {
        this._groups = value;
    };
    /**
     * Gets the inputFilterGroups property value. *Experimental* Filter group set used to filter out objects at the early stage of reading them from the directory. If an object doesn't satisfy this filter it will not be processed further. Important to understand is that if an object used to satisfy this filter at a given moment, and then the object or the filter was changed so that filter is no longer satisfied, such object will NOT get de-provisioned. An object is considered in scope if ANY of the groups in the collection is evaluated to true.
     * @returns a filterGroup
     */
    public get inputFilterGroups() {
        return this._inputFilterGroups;
    };
    /**
     * Sets the inputFilterGroups property value. *Experimental* Filter group set used to filter out objects at the early stage of reading them from the directory. If an object doesn't satisfy this filter it will not be processed further. Important to understand is that if an object used to satisfy this filter at a given moment, and then the object or the filter was changed so that filter is no longer satisfied, such object will NOT get de-provisioned. An object is considered in scope if ANY of the groups in the collection is evaluated to true.
     * @param value Value to set for the inputFilterGroups property.
     */
    public set inputFilterGroups(value: FilterGroup[] | undefined) {
        this._inputFilterGroups = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<FilterGroup>("categoryFilterGroups", this.categoryFilterGroups);
        writer.writeCollectionOfObjectValues<FilterGroup>("groups", this.groups);
        writer.writeCollectionOfObjectValues<FilterGroup>("inputFilterGroups", this.inputFilterGroups);
        writer.writeAdditionalData(this.additionalData);
    };
}
