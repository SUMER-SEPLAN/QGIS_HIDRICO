// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_Volumeanualtotalm_46rule0_eval_expression(context) {
    // "Volume Anual (m³) atual" >= 599.64999999999997726 AND "Volume Anual (m³) atual" <= 141273.25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Volume Anual (m³) atual']  >= 599.65) && (feature.properties['Volume Anual (m³) atual']  <= 141273.25));
    } else {
        return ((feature['Volume Anual (m³) atual']  >= 599.65) && (feature['Volume Anual (m³) atual']  <= 141273.25));
    }
}


function exp_Volumeanualtotalm_46rule1_eval_expression(context) {
    // "Volume Anual (m³) atual" > 141273.25 AND "Volume Anual (m³) atual" <= 592351.66000000003259629

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Volume Anual (m³) atual']  > 141273.25) && (feature.properties['Volume Anual (m³) atual']  <= 592351.66));
    } else {
        return ((feature['Volume Anual (m³) atual']  > 141273.25) && (feature['Volume Anual (m³) atual']  <= 592351.66));
    }
}


function exp_Volumeanualtotalm_46rule2_eval_expression(context) {
    // "Volume Anual (m³) atual" > 592351.66000000003259629 AND "Volume Anual (m³) atual" <= 2879120.64999999990686774

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Volume Anual (m³) atual']  > 592351.66) && (feature.properties['Volume Anual (m³) atual']  <= 2879120.65));
    } else {
        return ((feature['Volume Anual (m³) atual']  > 592351.66) && (feature['Volume Anual (m³) atual']  <= 2879120.65));
    }
}


function exp_Volumeanualtotalm_46rule3_eval_expression(context) {
    // "Volume Anual (m³) atual" > 2879120.64999999990686774 AND "Volume Anual (m³) atual" <= 5824000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Volume Anual (m³) atual']  > 2879120.65) && (feature.properties['Volume Anual (m³) atual']  <= 5824000.0));
    } else {
        return ((feature['Volume Anual (m³) atual']  > 2879120.65) && (feature['Volume Anual (m³) atual']  <= 5824000.0));
    }
}


function exp_Volumeanualtotalm_46rule4_eval_expression(context) {
    // "Volume Anual (m³) atual" > 5824000 AND "Volume Anual (m³) atual" <= 8332774.79999999981373549

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Volume Anual (m³) atual']  > 5824000.0) && (feature.properties['Volume Anual (m³) atual']  <= 8332774.8));
    } else {
        return ((feature['Volume Anual (m³) atual']  > 5824000.0) && (feature['Volume Anual (m³) atual']  <= 8332774.8));
    }
}


function exp_Volumeanualtotalm_46rule5_eval_expression(context) {
    // "Volume Anual (m³) atual % Total" IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Volume Anual (m³) atual % Total']  === null);
    } else {
        return (feature['Volume Anual (m³) atual % Total']  === null);
    }
}


function exp_Vazoinstantneamdiaatualmh_47rule0_eval_expression(context) {
    // "Vazão Máxima Instantânea (m³/h) atual" >= 0.66000000000000003 AND "Vazão Máxima Instantânea (m³/h) atual" <= 4.20000000000000018

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Vazão Máxima Instantânea (m³/h) atual']  >= 0.66) && (feature.properties['Vazão Máxima Instantânea (m³/h) atual']  <= 4.2));
    } else {
        return ((feature['Vazão Máxima Instantânea (m³/h) atual']  >= 0.66) && (feature['Vazão Máxima Instantânea (m³/h) atual']  <= 4.2));
    }
}


function exp_Vazoinstantneamdiaatualmh_47rule1_eval_expression(context) {
    // "Vazão Máxima Instantânea (m³/h) atual" > 4.20000000000000018 AND "Vazão Máxima Instantânea (m³/h) atual" <= 16.67000000000000171

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Vazão Máxima Instantânea (m³/h) atual']  > 4.2) && (feature.properties['Vazão Máxima Instantânea (m³/h) atual']  <= 16.67));
    } else {
        return ((feature['Vazão Máxima Instantânea (m³/h) atual']  > 4.2) && (feature['Vazão Máxima Instantânea (m³/h) atual']  <= 16.67));
    }
}


function exp_Vazoinstantneamdiaatualmh_47rule2_eval_expression(context) {
    // "Vazão Máxima Instantânea (m³/h) atual" > 16.67000000000000171 AND "Vazão Máxima Instantânea (m³/h) atual" <= 84.78000000000000114

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Vazão Máxima Instantânea (m³/h) atual']  > 16.67) && (feature.properties['Vazão Máxima Instantânea (m³/h) atual']  <= 84.78));
    } else {
        return ((feature['Vazão Máxima Instantânea (m³/h) atual']  > 16.67) && (feature['Vazão Máxima Instantânea (m³/h) atual']  <= 84.78));
    }
}


function exp_Vazoinstantneamdiaatualmh_47rule3_eval_expression(context) {
    // "Vazão Máxima Instantânea (m³/h) atual" > 84.78000000000000114 AND "Vazão Máxima Instantânea (m³/h) atual" <= 625

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Vazão Máxima Instantânea (m³/h) atual']  > 84.78) && (feature.properties['Vazão Máxima Instantânea (m³/h) atual']  <= 625.0));
    } else {
        return ((feature['Vazão Máxima Instantânea (m³/h) atual']  > 84.78) && (feature['Vazão Máxima Instantânea (m³/h) atual']  <= 625.0));
    }
}


function exp_Vazoinstantneamdiaatualmh_47rule4_eval_expression(context) {
    // "Vazão Máxima Instantânea (m³/h) atual" > 625 AND "Vazão Máxima Instantânea (m³/h) atual" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Vazão Máxima Instantânea (m³/h) atual']  > 625.0) && (feature.properties['Vazão Máxima Instantânea (m³/h) atual']  <= 1000.0));
    } else {
        return ((feature['Vazão Máxima Instantânea (m³/h) atual']  > 625.0) && (feature['Vazão Máxima Instantânea (m³/h) atual']  <= 1000.0));
    }
}


function exp_Vazoinstantneamdiaatualmh_47rule5_eval_expression(context) {
    // "Vazão Máxima Instantânea (m³/h) atual % Total" IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Vazão Máxima Instantânea (m³/h) atual % Total']  === null);
    } else {
        return (feature['Vazão Máxima Instantânea (m³/h) atual % Total']  === null);
    }
}


function exp_Vazomdiaatualmh_48rule0_eval_expression(context) {
    // "Vazão Média (m³/h) atual" >= 0.66000000000000003 AND "Vazão Média (m³/h) atual" <= 4.20000000000000018

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Vazão Média (m³/h) atual']  >= 0.66) && (feature.properties['Vazão Média (m³/h) atual']  <= 4.2));
    } else {
        return ((feature['Vazão Média (m³/h) atual']  >= 0.66) && (feature['Vazão Média (m³/h) atual']  <= 4.2));
    }
}


function exp_Vazomdiaatualmh_48rule1_eval_expression(context) {
    // "Vazão Média (m³/h) atual" > 4.20000000000000018 AND "Vazão Média (m³/h) atual" <= 18

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Vazão Média (m³/h) atual']  > 4.2) && (feature.properties['Vazão Média (m³/h) atual']  <= 18.0));
    } else {
        return ((feature['Vazão Média (m³/h) atual']  > 4.2) && (feature['Vazão Média (m³/h) atual']  <= 18.0));
    }
}


function exp_Vazomdiaatualmh_48rule2_eval_expression(context) {
    // "Vazão Média (m³/h) atual" > 18 AND "Vazão Média (m³/h) atual" <= 84.78000000000000114

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Vazão Média (m³/h) atual']  > 18.0) && (feature.properties['Vazão Média (m³/h) atual']  <= 84.78));
    } else {
        return ((feature['Vazão Média (m³/h) atual']  > 18.0) && (feature['Vazão Média (m³/h) atual']  <= 84.78));
    }
}


function exp_Vazomdiaatualmh_48rule3_eval_expression(context) {
    // "Vazão Média (m³/h) atual" > 84.78000000000000114 AND "Vazão Média (m³/h) atual" <= 625

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Vazão Média (m³/h) atual']  > 84.78) && (feature.properties['Vazão Média (m³/h) atual']  <= 625.0));
    } else {
        return ((feature['Vazão Média (m³/h) atual']  > 84.78) && (feature['Vazão Média (m³/h) atual']  <= 625.0));
    }
}


function exp_Vazomdiaatualmh_48rule4_eval_expression(context) {
    // "Vazão Média (m³/h) atual" > 625 AND "Vazão Média (m³/h) atual" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Vazão Média (m³/h) atual']  > 625.0) && (feature.properties['Vazão Média (m³/h) atual']  <= 1000.0));
    } else {
        return ((feature['Vazão Média (m³/h) atual']  > 625.0) && (feature['Vazão Média (m³/h) atual']  <= 1000.0));
    }
}


function exp_Vazomdiaatualmh_48rule5_eval_expression(context) {
    // "Vazão Média (m³/h) atual % Total" IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Vazão Média (m³/h) atual % Total']  === null);
    } else {
        return (feature['Vazão Média (m³/h) atual % Total']  === null);
    }
}


function exp_CisternasentreguesMDS_75rule0_eval_expression(context) {
    // "Total de cisternas entregues" >= 1 AND "Total de cisternas entregues" <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  >= 1.0) && (feature.properties['Total de cisternas entregues']  <= 500.0));
    } else {
        return ((feature['Total de cisternas entregues']  >= 1.0) && (feature['Total de cisternas entregues']  <= 500.0));
    }
}


function exp_CisternasentreguesMDS_75rule1_eval_expression(context) {
    // "Total de cisternas entregues" > 500 AND "Total de cisternas entregues" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  > 500.0) && (feature.properties['Total de cisternas entregues']  <= 1000.0));
    } else {
        return ((feature['Total de cisternas entregues']  > 500.0) && (feature['Total de cisternas entregues']  <= 1000.0));
    }
}


function exp_CisternasentreguesMDS_75rule2_eval_expression(context) {
    // "Total de cisternas entregues" > 1000 AND "Total de cisternas entregues" <= 1500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  > 1000.0) && (feature.properties['Total de cisternas entregues']  <= 1500.0));
    } else {
        return ((feature['Total de cisternas entregues']  > 1000.0) && (feature['Total de cisternas entregues']  <= 1500.0));
    }
}


function exp_CisternasentreguesMDS_75rule3_eval_expression(context) {
    // "Total de cisternas entregues" > 1500 AND "Total de cisternas entregues" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  > 1500.0) && (feature.properties['Total de cisternas entregues']  <= 2000.0));
    } else {
        return ((feature['Total de cisternas entregues']  > 1500.0) && (feature['Total de cisternas entregues']  <= 2000.0));
    }
}


function exp_CisternasentreguesMDS_75rule4_eval_expression(context) {
    // "Total de cisternas entregues" > 2000 AND "Total de cisternas entregues" <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  > 2000.0) && (feature.properties['Total de cisternas entregues']  <= 2500.0));
    } else {
        return ((feature['Total de cisternas entregues']  > 2000.0) && (feature['Total de cisternas entregues']  <= 2500.0));
    }
}


function exp_CisternasentreguesMDS_75rule5_eval_expression(context) {
    // "Total de cisternas entregues" > 2500 AND "Total de cisternas entregues" <= 2663

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  > 2500.0) && (feature.properties['Total de cisternas entregues']  <= 2663.0));
    } else {
        return ((feature['Total de cisternas entregues']  > 2500.0) && (feature['Total de cisternas entregues']  <= 2663.0));
    }
}


function exp_CisternasentreguesMDS_75rule6_eval_expression(context) {
    // "Total de cisternas entregues" = 0 OR "Total de cisternas entregues" IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  == 0) || (feature.properties['Total de cisternas entregues']  === null));
    } else {
        return ((feature['Total de cisternas entregues']  == 0) || (feature['Total de cisternas entregues']  === null));
    }
}


function exp_Cisternasemcontruo_76rule0_eval_expression(context) {
    // "Total em construção" >= 1 AND "Total em construção" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total em construção']  >= 1.0) && (feature.properties['Total em construção']  <= 100.0));
    } else {
        return ((feature['Total em construção']  >= 1.0) && (feature['Total em construção']  <= 100.0));
    }
}


function exp_Cisternasemcontruo_76rule1_eval_expression(context) {
    // "Total em construção" > 100 AND "Total em construção" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total em construção']  > 100.0) && (feature.properties['Total em construção']  <= 200.0));
    } else {
        return ((feature['Total em construção']  > 100.0) && (feature['Total em construção']  <= 200.0));
    }
}


function exp_Cisternasemcontruo_76rule2_eval_expression(context) {
    // "Total em construção" > 200 AND "Total em construção" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total em construção']  > 200.0) && (feature.properties['Total em construção']  <= 300.0));
    } else {
        return ((feature['Total em construção']  > 200.0) && (feature['Total em construção']  <= 300.0));
    }
}


function exp_Cisternasemcontruo_76rule3_eval_expression(context) {
    // "Total em construção" > 300 AND "Total em construção" <= 311

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total em construção']  > 300.0) && (feature.properties['Total em construção']  <= 311.0));
    } else {
        return ((feature['Total em construção']  > 300.0) && (feature['Total em construção']  <= 311.0));
    }
}


function exp_Cisternasemcontruo_76rule4_eval_expression(context) {
    // "Total em construção" = 0 OR "Total em construção" IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total em construção']  == 0) || (feature.properties['Total em construção']  === null));
    } else {
        return ((feature['Total em construção']  == 0) || (feature['Total em construção']  === null));
    }
}


function exp_CisternasGraudePrioridadeSesan_77rule0_eval_expression(context) {
    // "Grau prioridade SESAN" = 'Alto'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Grau prioridade SESAN']  == 'Alto');
    } else {
        return (feature['Grau prioridade SESAN']  == 'Alto');
    }
}


function exp_CisternasGraudePrioridadeSesan_77rule1_eval_expression(context) {
    // "Grau prioridade SESAN" = 'Baixo'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Grau prioridade SESAN']  == 'Baixo');
    } else {
        return (feature['Grau prioridade SESAN']  == 'Baixo');
    }
}


function exp_CisternasGraudePrioridadeSesan_77rule2_eval_expression(context) {
    // "Grau prioridade SESAN" = 'Médio'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Grau prioridade SESAN']  == 'Médio');
    } else {
        return (feature['Grau prioridade SESAN']  == 'Médio');
    }
}


function exp_CisternasGraudePrioridadeSesan_77rule3_eval_expression(context) {
    // 

    var feature = context.feature;
    
    if (feature.properties) {
        return null;
    } else {
        return null;
    }
}


function exp_CrescimentopercentualdasCisternas2023a2025_78rule0_eval_expression(context) {
    // "Crescimento % Total" >= 0.05 AND "Crescimento % Total" <= 10.83000000000000007

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Crescimento % Total']  >= 0.05) && (feature.properties['Crescimento % Total']  <= 10.83));
    } else {
        return ((feature['Crescimento % Total']  >= 0.05) && (feature['Crescimento % Total']  <= 10.83));
    }
}


function exp_CrescimentopercentualdasCisternas2023a2025_78rule1_eval_expression(context) {
    // "Crescimento % Total" > 10.83000000000000007 AND "Crescimento % Total" <= 38.67000000000000171

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Crescimento % Total']  > 10.83) && (feature.properties['Crescimento % Total']  <= 38.67));
    } else {
        return ((feature['Crescimento % Total']  > 10.83) && (feature['Crescimento % Total']  <= 38.67));
    }
}


function exp_CrescimentopercentualdasCisternas2023a2025_78rule2_eval_expression(context) {
    // "Crescimento % Total" > 38.67000000000000171 AND "Crescimento % Total" <= 123.42000000000000171

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Crescimento % Total']  > 38.67) && (feature.properties['Crescimento % Total']  <= 123.42));
    } else {
        return ((feature['Crescimento % Total']  > 38.67) && (feature['Crescimento % Total']  <= 123.42));
    }
}


function exp_CrescimentopercentualdasCisternas2023a2025_78rule3_eval_expression(context) {
    // "Crescimento % Total" > 123.42000000000000171 AND "Crescimento % Total" <= 314.51999999999998181

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Crescimento % Total']  > 123.42) && (feature.properties['Crescimento % Total']  <= 314.52));
    } else {
        return ((feature['Crescimento % Total']  > 123.42) && (feature['Crescimento % Total']  <= 314.52));
    }
}


function exp_CrescimentopercentualdasCisternas2023a2025_78rule4_eval_expression(context) {
    // "Crescimento % Total" > 314.51999999999998181 AND "Crescimento % Total" <= 1146.15000000000009095

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Crescimento % Total']  > 314.52) && (feature.properties['Crescimento % Total']  <= 1146.15));
    } else {
        return ((feature['Crescimento % Total']  > 314.52) && (feature['Crescimento % Total']  <= 1146.15));
    }
}


function exp_CrescimentopercentualdasCisternas2023a2025_78rule5_eval_expression(context) {
    // "Crescimento % Total" IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Crescimento % Total']  === null);
    } else {
        return (feature['Crescimento % Total']  === null);
    }
}


function exp_Decreton23756DE30042025_79rule0_eval_expression(context) {
    // "Situação de emergência em decorrência da seca" IS NOT NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Situação de emergência em decorrência da seca']  !== null);
    } else {
        return (feature['Situação de emergência em decorrência da seca']  !== null);
    }
}


function exp_S2iD_80rule0_eval_expression(context) {
    // "Cobrade Tipo" IS NOT NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Cobrade Tipo']  !== null);
    } else {
        return (feature['Cobrade Tipo']  !== null);
    }
}