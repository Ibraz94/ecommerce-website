import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
    name: "sale",
    title: "Sale",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            title: "Sale Title",
            name: "title",
            type: "string",
        }),
        defineField({
            title: "Sale Description",
            name: "description",
            type: "text",
        }),
        defineField({
            title: "Discount Amount",
            name: "discountAmount",
            type: "number",
            description: "Amount off in percentage or fixed value",
        }),
        defineField({
            title: "Coupon Code",
            name: "couponCode",
            type: "string",
        }),
        defineField({
            title: "Valid Form",
            name: "validForm",
            type: "datetime",
        }),
        defineField({
            title: "Valid Until",
            name: "validUntil",
            type: "datetime",
        }),
        defineField({
            title: "Is Active",
            name: "isActive",
            type: "boolean",
            description: "Toggle to activate/deactivate the sale",
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: "title",
            discountAmount: "discountAmount",
            couponCode: "couponCode",
            isActive: "isActive",
        },
        prepare(selection) {
            const { title, discountAmount, couponCode, isActive } = selection;
            const status = isActive ? "Active" : "Inactive";
            return {
                title,
                subtitle: `${discountAmount}% off - Code: ${couponCode} - ${status}`,
            };
        },
    },
});