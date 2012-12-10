#! /bin/bash
# Build script

input_path="assets/less/theme/default/"
output_path="dist/latest/css/theme/default/"
master_less="master.less"
master_css="master.css"
master_css_minified="master.min.css"

input_master=$input_path$master_less
ouput_master=$output_path$master_css
ouput_master_minified=$output_path$master_css_minified

echo "Building LESS files to"
echo $ouput_master
lessc $input_path$master_less $output_path$master_css

echo "Creating a minified version at"
echo $ouput_master_minified
yuicompressor $ouput_master -o $ouput_master_minified