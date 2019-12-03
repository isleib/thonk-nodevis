<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>The Climate Is Changing</title>
<link rel="stylesheet" href="main.css">
<script type="text/javascript" src="https://d3js.org/d3.v5.min.js"></script>
</head>
<body>
<script>
/* these won't change color or size depending on the values,
just setting it up for later layers */
var jsonMainNodes = [
    { "x_axis": 550, "y_axis": 500, "radius": 100, "color": "#a6f1c3", "label": "The Climate Is Changing"},
 
    { "x_axis": 400, "y_axis": 250, "radius": 20, "color": "#a6f1c3", "link": "https://science.sciencemag.org/content/333/6045/1024"},
    { "x_axis": 350, "y_axis": 250, "radius": 20, "color": "#a6f1c3", "link": "https://journals.ametsoc.org/doi/full/10.1175/2011JCLI4101.1"},
    { "x_axis": 300, "y_axis": 250, "radius": 20, "color": "#a6f1c3", "link": "https://journals.ametsoc.org/doi/full/10.1175/JCLI-D-11-00081.1"},
    { "x_axis": 250, "y_axis": 250, "radius": 20, "color": "#a6f1c3", "link": "https://link.springer.com/article/10.1007%2Fs10584-011-0112-y"},
    { "x_axis": 200, "y_axis": 250, "radius": 20, "color": "#a6f1c3", "link": "https://journals.ametsoc.org/doi/full/10.1175/JCLI-D-11-00129.1"},
    { "x_axis": 150, "y_axis": 250, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/241062414_Rapid_change_in_semi-diurnal_tides_in_the_North_Atlantic_since_1980"},
    { "x_axis": 400, "y_axis": 300, "radius": 20, "color": "#a6f1c3", "link": "https://journals.ametsoc.org/doi/full/10.1175/JCLI-D-11-00027.1"},
    { "x_axis": 350, "y_axis": 300, "radius": 20, "color": "#a6f1c3", "link": "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2011GL047282"},
    { "x_axis": 300, "y_axis": 300, "radius": 20, "color": "#a6f1c3", "link": "https://www.hydrol-earth-syst-sci.net/15/1537/2011/hess-15-1537-2011.html"},
    { "x_axis": 250, "y_axis": 300, "radius": 20, "color": "#a6f1c3", "link": "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2011GL047138"},
    { "x_axis": 200, "y_axis": 300, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/229827222_Recent_trends_of_the_tropical_hydrological_cycle_inferred_from_Global_Precipitation_Climatology_Project_and_International_Satellite_Cloud_Climatology_Project_data"},
    { "x_axis": 150, "y_axis": 300, "radius": 20, "color": "#a6f1c3", "link": "https://journals.ametsoc.org/doi/full/10.1175/2011JCLI3979.1"},
    { "x_axis": 400, "y_axis": 350, "radius": 20, "color": "#a6f1c3", "link": "https://www.nature.com/articles/nclimate1084"},
    { "x_axis": 350, "y_axis": 350, "radius": 20, "color": "#a6f1c3", "link": "https://www.pnas.org/content/early/2011/02/11/1014107108.abstract"},
    { "x_axis": 300, "y_axis": 350, "radius": 20, "color": "#a6f1c3", "link": "https://www.nature.com/articles/ngeo1078"},
    { "x_axis": 200, "y_axis": 350, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/251431475_Rapid_poleward_range_expansion_of_tropical_reef_corals_in_response_to_rising_sea_surface_temperatures"},
    { "x_axis": 250, "y_axis": 350, "radius": 20, "color": "#a6f1c3", "link": "https://onlinelibrary.wiley.com/doi/full/10.1111/j.1365-2486.2010.02380.x"},
    { "x_axis": 200, "y_axis": 350, "radius": 20, "color": "#a6f1c3", "link": "https://royalsocietypublishing.org/doi/full/10.1098/rsta.2010.0290"},
    { "x_axis": 150, "y_axis": 350, "radius": 20, "color": "#a6f1c3", "link": "https://royalsocietypublishing.org/doi/full/10.1098/rsta.2010.0292"},
    { "x_axis": 400, "y_axis": 400, "radius": 20, "color": "#a6f1c3", "link": "https://www.pnas.org/content/108/4/1474.short"},
    { "x_axis": 350, "y_axis": 400, "radius": 20, "color": "#a6f1c3", "link": "https://pure.uva.nl/ws/files/946828/88358_332408.pdf"},
    { "x_axis": 300, "y_axis": 400, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/251438313_Space_observations_of_inland_water_bodies_show_rapid_surface_warming_since_1985"},
    { "x_axis": 250, "y_axis": 400, "radius": 20, "color": "#a6f1c3", "link": "https://journals.ametsoc.org/doi/full/10.1175/2007JCLI1568.1"},
    { "x_axis": 200, "y_axis": 400, "radius": 20, "color": "#a6f1c3", "link": "https://www.sciencedirect.com/science/article/pii/S0967063710002098?via%3Dihub"},
    { "x_axis": 150, "y_axis": 400, "radius": 20, "color": "#a6f1c3", "link": "https://www.ocean-sci.net/6/815/2010/os-6-815-2010.html"},
    { "x_axis": 400, "y_axis": 450, "radius": 20, "color": "#a6f1c3", "link": "https://royalsocietypublishing.org/doi/full/10.1098/rstb.2010.0021"},
    { "x_axis": 350, "y_axis": 450, "radius": 20, "color": "#a6f1c3", "link": "https://www.ncdc.noaa.gov/sotc/global/200913"},
    { "x_axis": 300, "y_axis": 450, "radius": 20, "color": "#a6f1c3", "link": "https://science.sciencemag.org/content/328/5982/1164"},
    { "x_axis": 250, "y_axis": 450, "radius": 20, "color": "#a6f1c3", "link": "https://link.springer.com/article/10.1007%2Fs12237-010-9307-0"},
    { "x_axis": 200, "y_axis": 450, "radius": 20, "color": "#a6f1c3", "link": "https://royalsocietypublishing.org/doi/full/10.1098/rsbl.2010.0053"},
    { "x_axis": 150, "y_axis": 450, "radius": 20, "color": "#a6f1c3", "link": "https://royalsocietypublishing.org/doi/full/10.1098/rspb.2010.0291"},
    { "x_axis": 400, "y_axis": 500, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/229671151_Trophic_level_asynchrony_in_rates_of_phenological_change_for_marine_freshwater_and_terrestrial_environments"},
    { "x_axis": 350, "y_axis": 500, "radius": 20, "color": "#a6f1c3", "link": "https://www.ingentaconnect.com/content/tandf/gche/2010/00000026/A00101s1/art00002"},
    { "x_axis": 300, "y_axis": 500, "radius": 20, "color": "#a6f1c3", "link": "https://www.biogeosciences.net/6/2661/2009/bg-6-2661-2009.pdf"},
    { "x_axis": 250, "y_axis": 500, "radius": 20, "color": "#a6f1c3", "link": "http://www.copenhagendiagnosis.com/"},
    { "x_axis": 200, "y_axis": 500, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/224017914_An_observationally_based_energy_balance_for_the_Earth_since_1950"},
    { "x_axis": 150, "y_axis": 500, "radius": 20, "color": "#a6f1c3", "link": "https://link.springer.com/article/10.1007%2Fs10584-009-9648-5"},
    { "x_axis": 400, "y_axis": 550, "radius": 20, "color": "#a6f1c3", "link": "https://www.sciencedirect.com/science/article/pii/S0380133009001403?via%3Dihub"},
    { "x_axis": 350, "y_axis": 550, "radius": 20, "color": "#a6f1c3", "link": "https://journals.ametsoc.org/doi/abs/10.1175/2008BAMS2634.1"},
    { "x_axis": 300, "y_axis": 550, "radius": 20, "color": "#a6f1c3", "link": "https://d3dqsm2futmewz.cloudfront.net/docs/ugec/other-conferences/climate-change-synthesis-report-2009.pdf"},
    { "x_axis": 250, "y_axis": 550, "radius": 20, "color": "#a6f1c3", "link": "https://www.nature.com/articles/ngeo460"},
    { "x_axis": 200, "y_axis": 550, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/223834869_Evidence_for_ocean_acidification_in_the_Great_Barrier_Reef_of_Australia"},
    { "x_axis": 150, "y_axis": 550, "radius": 20, "color": "#a6f1c3", "link": "https://link.springer.com/article/10.1007%2Fs00477-008-0253-3"},
    { "x_axis": 400, "y_axis": 600, "radius": 20, "color": "#a6f1c3", "link": "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2008GL036228"},
    { "x_axis": 350, "y_axis": 600, "radius": 20, "color": "#a6f1c3", "link": "https://www.biogeosciences.net/5/1651/2008/bg-5-1651-2008.pdf"},
    { "x_axis": 300, "y_axis": 600, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/228373078_Time_series_modeling_and_central_European_temperature_impact_assessment_of_phenological_records_over_the_last_250_years"},
    { "x_axis": 250, "y_axis": 600, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/228838552_Ocean_acidification_of_the_Greater_Caribbean_Region_1996-2006"},
    { "x_axis": 200, "y_axis": 600, "radius": 20, "color": "#a6f1c3", "link": "https://www.sciencedirect.com/science/article/pii/S0272771408003405"},
    { "x_axis": 150, "y_axis": 600, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/5271742_A_Significant_Upward_Shift_in_Plant_Species_Optimum_Elevation_During_the_20th_Century"},
    { "x_axis": 400, "y_axis": 650, "radius": 20, "color": "#a6f1c3", "link": "https://www.nature.com/articles/nature06937"},
    { "x_axis": 350, "y_axis": 650, "radius": 20, "color": "#a6f1c3", "link": "https://hal.archives-ouvertes.fr/file/index/docid/297680/filename/bg-5-485-2008.pdf"},
    { "x_axis": 300, "y_axis": 650, "radius": 20, "color": "#a6f1c3", "link": "https://iopscience.iop.org/article/10.1088/1748-9326/3/1/014002"},
    { "x_axis": 250, "y_axis": 650, "radius": 20, "color": "#a6f1c3", "link": "https://www.int-res.com/articles/cr_oa/c035p005.pdf"},
    { "x_axis": 200, "y_axis": 650, "radius": 20, "color": "#a6f1c3", "link": "https://www.nature.com/articles/ngeo.2007.38"},
    { "x_axis": 150, "y_axis": 650, "radius": 20, "color": "#a6f1c3", "link": "https://www.ipcc.ch/report/ar4/wg1/"},
    { "x_axis": 400, "y_axis": 700, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/6193665_Poleward_shifts_in_winter_ranges_of_North_American_Birds"},
    { "x_axis": 350, "y_axis": 700, "radius": 20, "color": "#a6f1c3", "link": "https://science.sciencemag.org/content/316/5832/1735"},
    { "x_axis": 300, "y_axis": 700, "radius": 20, "color": "#a6f1c3", "link": "https://pubs.giss.nasa.gov/abs/ha07110b.html"},
    { "x_axis": 250, "y_axis": 700, "radius": 20, "color": "#a6f1c3", "link": "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1365-2486.2006.01260.x"},
    { "x_axis": 200, "y_axis": 700, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/6974447_Rapid_Advance_of_Spring_Arrival_Dates_in_Long-Distance_Migratory_Birds"},
    { "x_axis": 150, "y_axis": 700, "radius": 20, "color": "#a6f1c3", "link": "https://www.researchgate.net/publication/7020442_Evolutionary_Response_to_Rapid_Climate_Change"},
    { "x_axis": 400, "y_axis": 750, "radius": 20, "color": "#a6f1c3", "link": "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1461-0248.2005.00824.x"},
    { "x_axis": 350, "y_axis": 750, "radius": 20, "color": "#a6f1c3", "link": "https://pubs.giss.nasa.gov/abs/ha00110y.html"},
    { "x_axis": 300, "y_axis": 750, "radius": 20, "color": "#a6f1c3", "link": "https://iopscience.iop.org/article/10.1088/0034-4885/68/6/R02"},
    { "x_axis": 250, "y_axis": 750, "radius": 20, "color": "#a6f1c3", "link": "https://web.stanford.edu/group/efmh/jacobson/Articles/IX/2004JD005220.pdf"},
    { "x_axis": 200, "y_axis": 750, "radius": 20, "color": "#a6f1c3", "link": "https://science.sciencemag.org/content/307/5716/1725"},
    { "x_axis": 150, "y_axis": 750, "radius": 20, "color": "#a6f1c3", "link": "https://www.sciencedirect.com/science/article/pii/S0065250404350014?via%3Dihub"},
    { "x_axis": 400, "y_axis": 800, "radius": 20, "color": "#a6f1c3", "link": "https://www.nature.com/articles/nature01286"},
    { "x_axis": 350, "y_axis": 800, "radius": 20, "color": "#a6f1c3", "link": "https://www.ncbi.nlm.nih.gov/pubmed/12806101"},
    { "x_axis": 300, "y_axis": 800, "radius": 20, "color": "#a6f1c3", "link": "https://repository.si.edu/handle/10088/3371"},
    { "x_axis": 250, "y_axis": 800, "radius": 20, "color": "#a6f1c3", "link": "https://science.sciencemag.org/content/292/5515/267.abstract"},
    { "x_axis": 200, "y_axis": 800, "radius": 20, "color": "#a6f1c3", "link": "https://onlinelibrary.wiley.com/doi/abs/10.1046/j.1365-2486.2001.00421.x"},
    { "x_axis": 150, "y_axis": 800, "radius": 20, "color": "#a6f1c3", "link": "https://www.ipcc.ch/assessment-report/ar3/"},
    { "x_axis": 400, "y_axis": 850, "radius": 20, "color": "#a6f1c3", "link": "https://pubs.giss.nasa.gov/abs/ha04000r.html"},
    { "x_axis": 350, "y_axis": 850, "radius": 20, "color": "#a6f1c3", "link": "https://www.ipcc.ch/report/ipcc-second-assessment-full-report/"},
    { "x_axis": 300, "y_axis": 850, "radius": 20, "color": "#a6f1c3", "link": "https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/GL015i004p00323"},
    { "x_axis": 250, "y_axis": 850, "radius": 20, "color": "#a6f1c3", "link": "https://pubs.giss.nasa.gov/abs/ha00700d.html"},
    { "x_axis": 200, "y_axis": 850, "radius": 20, "color": "#a6f1c3", "link": "https://pubs.giss.nasa.gov/abs/ha00700d.html"},
    { "x_axis": 150, "y_axis": 850, "radius": 20, "color": "#a6f1c3", "link": "https://www.nature.com/articles/322430a0"},
    { "x_axis": 400, "y_axis": 900, "radius": 20, "color": "#a6f1c3", "link": "https://journals.ametsoc.org/doi/abs/10.1175/1520-0493%281982%29110%3C0059%3AVISATP%3E2.0.CO%3B2"},
    { "x_axis": 350, "y_axis": 900, "radius": 20, "color": "#a6f1c3", "link": "https://pubs.giss.nasa.gov/abs/ha04600x.html"},
   
    { "x_axis": 450, "y_axis": 650, "radius": 20, "color": "grey", "link": "https://rmets.onlinelibrary.wiley.com/doi/full/10.1002/joc.2371"},
    { "x_axis": 500, "y_axis": 650, "radius": 20, "color": "grey", "link": "https://rmets.onlinelibrary.wiley.com/doi/full/10.1002/met.276"},
    { "x_axis": 550, "y_axis": 650, "radius": 20, "color": "grey", "link": "https://www.researchgate.net/publication/241062907_Influence_of_cold_season_climate_variability_on_lakes_and_wetlands_in_the_Great_Lakes_region"},
    { "x_axis": 600, "y_axis": 650, "radius": 20, "color": "grey", "link": "https://www.sciencedirect.com/science/article/pii/S0012825211000857"},
    { "x_axis": 650, "y_axis": 650, "radius": 20, "color": "grey", "link": "https://www.researchgate.net/publication/241062490_Recent_Observed_Climate_Change_over_the_Arabian_Peninsula"},
    { "x_axis": 450, "y_axis": 700, "radius": 20, "color": "grey", "link": "https://www.sciencedirect.com/science/article/pii/S1352231011005826"},
    { "x_axis": 500, "y_axis": 700, "radius": 20, "color": "grey", "link": "https://link.springer.com/article/10.1007%2Fs00704-011-0463-3"},
    { "x_axis": 550, "y_axis": 700, "radius": 20, "color": "grey", "link": "https://link.springer.com/article/10.1007%2Fs10584-011-0097-6"},
    { "x_axis": 600, "y_axis": 700, "radius": 20, "color": "grey", "link": "https://link.springer.com/article/10.1007%2Fs10933-011-9521-1"},
    { "x_axis": 650, "y_axis": 700, "radius": 20, "color": "grey", "link": "https://www.researchgate.net/publication/251427597_Trend_analysis_of_surface_cloud-free_downwelling_long-wave_radiation_from_four_Swiss_sites"},
    { "x_axis": 450, "y_axis": 750, "radius": 20, "color": "grey", "link": "https://rmets.onlinelibrary.wiley.com/doi/full/10.1002/joc.2361"},
    { "x_axis": 500, "y_axis": 750, "radius": 20, "color": "grey", "link": "https://journals.ametsoc.org/doi/full/10.1175/2011WCAS1096.1"},
    { "x_axis": 550, "y_axis": 750, "radius": 20, "color": "grey", "link": "https://link.springer.com/article/10.1007%2Fs10584-011-0099-4"},
    { "x_axis": 600, "y_axis": 750, "radius": 20, "color": "grey", "link": "https://science.sciencemag.org/content/332/6028/451"},
    { "x_axis": 650, "y_axis": 750, "radius": 20, "color": "grey", "link": "https://www.researchgate.net/publication/251432616_Increasing_atmospheric_poleward_energy_transport_with_global_warming"},
    { "x_axis": 450, "y_axis": 800, "radius": 20, "color": "grey", "link": "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/RG027i001p00115"},
    { "x_axis": 500, "y_axis": 800, "radius": 20, "color": "grey", "link": "http://www.geo.umass.edu/faculty/bradley/jones1986.pdf"},
    { "x_axis": 550, "y_axis": 800, "radius": 20, "color": "grey", "link": "http://www.geo.umass.edu/faculty/bradley/jones1986.pdf"},
    { "x_axis": 600, "y_axis": 800, "radius": 20, "color": "grey", "link": "https://link.springer.com/article/10.1007%2FBF02423429"},
    { "x_axis": 650, "y_axis": 800, "radius": 20, "color": "grey", "link": "https://journals.ametsoc.org/doi/abs/10.1175/1520-0493%281982%29110%3C0071%3AVISATP%3E2.0.CO%3B2"},
   
     { "x_axis": 700, "y_axis": 250, "radius": 20, "color": "#9a0000", "link": "https://www.researchgate.net/publication/249883478_Introductory_paper_on_paradigm_shift_Should_we_change_emphasis_in_#a6f1c3house-effect_research"},
     { "x_axis": 750, "y_axis": 250, "radius": 20, "color": "#9a0000", "link": "https://pielkeclimatesci.files.wordpress.com/2009/10/r-310.pdf"},
     { "x_axis": 800, "y_axis": 250, "radius": 20, "color": "#9a0000", "link": "https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/JD094iD03p03359"},
     { "x_axis": 850, "y_axis": 250, "radius": 20, "color": "#9a0000", "link": "https://www.researchgate.net/publication/248812273_The_continuing_search_for_an_anthropogenic_climate_change_signal_Limitations_of_correlation-based_approaches"},
     { "x_axis": 900, "y_axis": 250, "radius": 20, "color": "#9a0000", "link": "https://www.int-res.com/articles/cr2003/23/c023p001.pdf"},
     { "x_axis": 950, "y_axis": 250, "radius": 20, "color": "#9a0000", "link": "https://journals.ametsoc.org/doi/pdf/10.1175/1520-0477(1992)073%3C1563%3AGWART%3E2.0.CO%3B2"},
     { "x_axis": 700, "y_axis": 300, "radius": 20, "color": "#9a0000", "link": "https://www.int-res.com/articles/cr/17/c017p045.pdf"},
     { "x_axis": 750, "y_axis": 300, "radius": 20, "color": "#9a0000", "link": "https://onlinelibrary.wiley.com/doi/abs/10.1002/ird.19"},
     { "x_axis": 800, "y_axis": 300, "radius": 20, "color": "#9a0000", "link": "https://www.int-res.com/articles/cr2003/23/c023p089.pdf"},

];


//this next block is for scaling the svg container to the data

//these will be updated to max x and y coordinates
var max_x = 0;
var max_y = 0;

//loop through jsonMainNodes array
for (var i = 0; i < jsonMainNodes.length; i++) {

var temp_x, temp_y;

//to get the furthest right hand point add the x-coordinate and the radius of the nodes
var temp_x = jsonMainNodes[i].x_axis + jsonMainNodes[i].radius;
//to get the furthest bottom point add the y-coordinate and the radius of the nodes
var temp_y = jsonMainNodes[i].y_axis + jsonMainNodes[i].radius;
/*if the temp x-coordinate is bigger than max_x,
make the max_x equal to the temp_x
otherwise do nothing */
if (temp_x >= max_x) {
max_x = temp_x
}
/*if the temp y-coordinate is bigger than max_y,
make the max_y equal to the temp_y
otherwise do nothing */
if (temp_y >= max_y) {
max_y = temp_y
}
};

max_x;

max_y;
   
//Creating the svg container
var svgContainer = d3.select('body').append("svg")
.attr("id", "chart")
.attr("width", max_x + 100)
.attr("height", max_y + 500);
                                   

var nodeGroup = svgContainer.append("g");

//appending the circles
var circles = nodeGroup.selectAll("circle")
.data(jsonMainNodes)
.enter()
.append("circle");

//defining the circles
var circleAttributes = circles
.attr("cx", function (d) { return d.x_axis; })
.attr("cy", function (d) { return d.y_axis; })
.attr("r", function (d) { return d.radius; })
.attr("fill", function (d) { return d.color; })
                        .on("click", click)
                        .on("mouseover", function(d) {
                            d3.select(this).style("opacity", .7)
                        })
                        .on("mouseout", function(d) {
                            d3.select(this).style("opacity", 1)
                        });

//appending the labels
var text = svgContainer.selectAll("text")
.data(jsonMainNodes)
.enter()
.append("text");

//defining the labels
var labelAttributes = text
.attr("text-anchor", "middle")
.attr("x", function (d) { return d.x_axis; })
.attr("y", function (d) { return d.y_axis; })
.text(function (d) { return d.label; })
.attr("font-family", "sans-serif")
.attr("font-size", "90 px")
.attr("fill", "white")


function click (d){
    let url =  d.link; //or whatever your URL field is called in the data
    window.open(url, "_self");
}

//this block is for scaling the data once we have some
/*var initialScaleData = [];

var newScaledData = [];
var maxDataPoint = d3.max(initialScaleData);

var linearScale = d3.scaleLinear()
.domain([0,maxDataPoint])
.range([0,100]);

for (var i = 0; i < initialScaleData.length; i++) {
newScaledData[i] = linearScale(initialScaleData[i]);
}
*/

</script>
</body>
</html>
